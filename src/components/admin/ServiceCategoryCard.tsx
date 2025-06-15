import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&auto=format";

interface ServiceCategoryCardProps {
  // You may keep props if needed, but they're not used here anymore
  onUpload?: (imageUrl: string) => void; // For external use if needed
}

export function ServiceCategoryCard({ onUpload }: ServiceCategoryCardProps) {
  const [image, setImage] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAvatarClick() {
    if (!isUploading && inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.click();
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
        setImage(url);
        if (onUpload) onUpload(url); // emit up if needed
      } else {
        alert("Failed to upload image");
      }
    } catch {
      alert("An error occurred while uploading");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col items-center space-y-4 py-2">
          <div
            className={`relative rounded-full bg-gray-100 border w-28 h-28 flex items-center justify-center cursor-pointer overflow-hidden group
              ${isUploading ? "opacity-70 pointer-events-none" : "hover:ring-2 hover:ring-gray-300"}
            `}
            aria-label="Upload"
            onClick={handleAvatarClick}
            tabIndex={0}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="object-cover w-full h-full"
              />
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
              ref={inputRef}
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            Click the icon to upload a photo.
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
