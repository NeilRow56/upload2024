'use client'

import { FileState, MultiFileDropzone } from '@/components/EdgestoreMultiFile'
import { useEdgeStore } from '@/lib/edgestore'
import { useState } from 'react'

function MultiFileDropzoneUsage() {
  const [fileStates, setFileStates] = useState<FileState[]>([])
  const [fileUrls, setFileUrls] = useState<String[]>([])
  const { edgestore } = useEdgeStore()

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates)

      const fileState = newFileStates.find((fileState) => fileState.key === key)
      if (fileState) {
        fileState.progress = progress
      }
      return newFileStates
    })
  }

  console.log(fileUrls)

  return (
    <div className=" h-screen bg-slate-50 pt-24">
      <section className="my-4w-full mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-4 pt-16 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <div className="  mt-8 flex  flex-col">
          <h2 className="mb-2 text-xl font-bold">Multi File Upload</h2>
          <div className="mx-auto">
            <MultiFileDropzone
              value={fileStates}
              onChange={(files) => {
                setFileStates(files)
              }}
              onFilesAdded={async (addedFiles) => {
                setFileStates([...fileStates, ...addedFiles])
                await Promise.all(
                  addedFiles.map(async (addedFileState) => {
                    try {
                      const res = await edgestore.publicFiles.upload({
                        file: addedFileState.file,
                        onProgressChange: async (progress) => {
                          updateFileProgress(addedFileState.key, progress)
                          if (progress === 100) {
                            // wait 1 second to set it to complete
                            // so that the user can see the progress bar at 100%
                            await new Promise((resolve) =>
                              setTimeout(resolve, 1000)
                            )
                            updateFileProgress(addedFileState.key, 'COMPLETE')
                          }
                        },
                      })
                      console.log(res)
                      setFileUrls((prevUrls) => [...prevUrls, res.url])
                    } catch (err) {
                      updateFileProgress(addedFileState.key, 'ERROR')
                    }
                  })
                )
              }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MultiFileDropzoneUsage
