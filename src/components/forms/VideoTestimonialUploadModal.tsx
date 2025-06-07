
import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Modal from "@/components/ui/modal"
import SuccessModal from "@/components/forms/SuccessModal"
import { Upload, Video, X, Play, Trash2 } from "lucide-react"

interface VideoTestimonialUploadModalProps {
  isOpen: boolean
  onClose: () => void
}

const VideoTestimonialUploadModal = ({ isOpen, onClose }: VideoTestimonialUploadModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    category: ""
  })
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const categories = [
    { value: "bootcamp", label: "Bootcamp Graduate" },
    { value: "mentorship", label: "Mentorship Program" },
    { value: "community", label: "Community Member" },
    { value: "resources", label: "Learning Resources" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateVideoFile = (file: File): boolean => {
    const allowedTypes = ['video/mp4', 'video/webm', 'video/mov', 'video/avi']
    const maxSize = 100 * 1024 * 1024 // 100MB

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid video file (MP4, WebM, MOV, or AVI)')
      return false
    }

    if (file.size > maxSize) {
      alert('Video file size must be less than 100MB')
      return false
    }

    return true
  }

  const handleFileSelect = useCallback((file: File) => {
    if (!validateVideoFile(file)) return

    setVideoFile(file)
    
    // Create preview URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }, [])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const videoFile = files.find(file => file.type.startsWith('video/'))
    
    if (videoFile) {
      handleFileSelect(videoFile)
    } else {
      alert('Please drop a valid video file')
    }
  }, [handleFileSelect])

  const handleRemoveVideo = () => {
    setVideoFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const simulateUpload = () => {
    return new Promise<void>((resolve) => {
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          resolve()
        }
      }, 200)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoFile) {
      alert('Please select a video file')
      return
    }

    setIsSubmitting(true)
    setUploadProgress(0)

    try {
      // Simulate upload progress
      await simulateUpload()
      
      console.log("Video testimonial submitted:", {
        ...formData,
        videoFile: videoFile.name,
        videoSize: videoFile.size
      })
      
      setIsSubmitting(false)
      onClose()
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: "",
        title: "",
        company: "",
        email: "",
        category: ""
      })
      handleRemoveVideo()
      setUploadProgress(0)
    } catch (error) {
      setIsSubmitting(false)
      alert('Upload failed. Please try again.')
    }
  }

  const isFormValid = formData.name && formData.email && formData.category && videoFile

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-3xl">
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Record Video Testimonial
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Share your success story through a video testimonial. Your experience could inspire others to start their tech journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Video Upload Section */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Video Testimonial *
              </Label>
              
              {!videoFile ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                    isDragOver
                      ? 'border-thrive-blue bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <Upload className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Drag and drop your video here
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        or click to browse files
                      </p>
                      <div className="text-xs text-gray-400 dark:text-gray-500">
                        <p>Supported formats: MP4, WebM, MOV, AVI</p>
                        <p>Maximum size: 100MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-start space-x-4">
                    {previewUrl && (
                      <div className="flex-shrink-0">
                        <video
                          ref={videoRef}
                          src={previewUrl}
                          className="w-32 h-24 object-cover rounded-lg"
                          controls
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Video className="h-5 w-5 text-thrive-blue" />
                        <span className="font-medium text-gray-900 dark:text-white truncate">
                          {videoFile.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatFileSize(videoFile.size)}
                      </p>
                      {isSubmitting && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-thrive-blue h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveVideo}
                      disabled={isSubmitting}
                      className="text-red-500 hover:text-red-700 disabled:opacity-50 p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileInputChange}
                className="hidden"
              />
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Job Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., TechCorp"
                  className="w-full"
                />
              </div>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                How did Thrive Link help you? *
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Consent */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <strong>Privacy Notice:</strong>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By submitting this video testimonial, you agree that Thrive Link may use your video, name, and provided information 
                for marketing purposes on our website, social media, and promotional materials. We will never share your 
                email address publicly or with third parties.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="w-full sm:w-auto order-2 sm:order-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full sm:flex-1 bg-thrive-blue hover:bg-blue-700 order-1 sm:order-2"
              >
                {isSubmitting ? `Uploading... ${uploadProgress}%` : "Submit Video Testimonial"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Video Uploaded Successfully!"
        message="Thank you for sharing your video testimonial! We'll review it and it will be featured on our testimonials page soon."
      />
    </>
  )
}

export default VideoTestimonialUploadModal
