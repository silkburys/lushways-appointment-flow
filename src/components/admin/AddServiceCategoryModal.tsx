
import React, { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

interface AddServiceCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (imageUrl: string) => void;
}

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&auto=format";

export function AddServiceCategoryModal({
  isOpen,
  onClose,
  onAdd,
}: AddServiceCategoryModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleAvatarClick() {
    if (!isUploading && imageInputRef.current) {
      imageInputRef.current.value = "";
      imageInputRef.current.click();
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/lovable-upload", { method: "POST", body: formData });
      if (res.ok) {
        const { url } = await res.json();
        setSelectedImage(url);
      } else {
        alert("Failed to upload image");
      }
    } catch {
      alert("An error occurred while uploading");
    } finally {
      setIsUploading(false);
    }
  }

  function handleAdd() {
    if (selectedImage) {
      onAdd(selectedImage);
      setSelectedImage("");
      onClose();
    }
  }

  function handleClose() {
    setSelectedImage("");
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-xs w-[300px]">
        <DialogHeader>
          <DialogTitle>Upload Category Photo</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-2">
          <div
            className={`relative rounded-full bg-gray-100 border w-28 h-28 flex items-center justify-center cursor-pointer overflow-hidden group
              ${isUploading ? "opacity-70 pointer-events-none" : "hover:ring-2 hover:ring-gray-300"}
            `}
            aria-label="Upload"
            onClick={handleAvatarClick}
            tabIndex={0}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Category" className="object-cover w-full h-full" />
            ) : (
              <Image className="h-10 w-10 text-gray-400" />
            )}
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                <span className="text-xs text-gray-500">Uploading...</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={imageInputRef}
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </div>
          <Button onClick={handleAdd} disabled={!selectedImage || isUploading} className="w-full">
            Use This Photo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

