
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Upload, Image } from 'lucide-react';

const colorOptions = [
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Purple', value: 'bg-purple-500' },
  { name: 'Pink', value: 'bg-pink-500' },
  { name: 'Indigo', value: 'bg-indigo-500' },
  { name: 'Red', value: 'bg-red-500' },
  { name: 'Yellow', value: 'bg-yellow-500' },
  { name: 'Teal', value: 'bg-teal-500' },
];

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&auto=format";

interface AddServiceCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (categoryData: { name: string; color: string; image: string }) => void;
}

export function AddServiceCategoryModal({ isOpen, onClose, onAdd }: AddServiceCategoryModalProps) {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const getCurrentImage = () => {
    if (selectedImage && selectedImage !== '') return selectedImage;
    return PLACEHOLDER_IMAGE;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validImage = selectedImage && selectedImage !== '' ? selectedImage : PLACEHOLDER_IMAGE;
    if (name.trim()) {
      onAdd({ name: name.trim(), color: selectedColor, image: validImage });
      setName('');
      setSelectedColor(colorOptions[0].value);
      setSelectedImage('');
      onClose();
    }
  };

  const handleClose = () => {
    setName('');
    setSelectedColor(colorOptions[0].value);
    setSelectedImage('');
    onClose();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/lovable-upload', { method: 'POST', body: formData });
      if (res.ok) {
        const { url } = await res.json();
        setSelectedImage(url);
      } else {
        alert('Failed to upload image');
      }
    } catch (e) {
      alert('An error occurred while uploading');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch('/api/lovable-upload', { method: 'POST', body: formData });
        if (res.ok) {
          const { url } = await res.json();
          setSelectedImage(url);
        } else {
          alert('Failed to upload image');
        }
      } catch (e) {
        alert('An error occurred while uploading');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleAvatarClick = () => {
    if (!isUploading && imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Service Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Start of new image upload section */}
          <div className="space-y-2">
            <Label>Category Image</Label>
            <div
              className={`
                border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center flex-col cursor-pointer transition-all relative
                ${isUploading ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-50'}
              `}
              onClick={handleAvatarClick}
              onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onDrop={handleDrop}
              role="button"
              tabIndex={0}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Category"
                  className="object-cover w-20 h-20 rounded"
                />
              ) : (
                <>
                  <Image className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-500 text-center">Click to upload or drag & drop</div>
                  <div className="text-[10px] text-gray-400">PNG, JPG up to 10MB</div>
                </>
              )}
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                  <span className="text-xs text-muted">Uploading...</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                hidden
                ref={imageInputRef}
                onChange={handleImageUpload}
                disabled={isUploading}
              />
            </div>
          </div>
          {/* End of new image upload section */}

          <div className="space-y-2">
            <Label htmlFor="categoryName">Category Name</Label>
            <Input
              id="categoryName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Category Color</Label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  className={`
                    w-full h-10 rounded-md border-2 transition-all
                    ${color.value}
                    ${selectedColor === color.value ? 'border-gray-900 scale-105' : 'border-gray-300'}
                  `}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isUploading}>
              Add Category
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
