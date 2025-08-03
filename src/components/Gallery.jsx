import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Upload, Image, Video, Heart, User } from 'lucide-react';

interface GalleryItem {
  id: string;
  name: string;
  message: string;
  type: 'image' | 'video';
  url: string;
  uploadedAt: Date;
}

export default function GalleryPage() {
  const [uploadForm, setUploadForm] = useState({
    name: '',
    message: '',
    files: [] as File[]
  });
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      name: 'Sarah & Mike',
      message: 'So excited for your special day! Love you both! 💕',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      uploadedAt: new Date('2026-09-15')
    },
    {
      id: '2',
      name: 'The Johnson Family',
      message: 'Congratulations! Wishing you a lifetime of happiness together.',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=400&fit=crop',
      uploadedAt: new Date('2026-09-20')
    }
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadForm(prev => ({ ...prev, files }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would upload files to a storage service
    const newItems = uploadForm.files.map((file, index) => ({
      id: Date.now() + index.toString(),
      name: uploadForm.name,
      message: uploadForm.message,
      type: file.type.startsWith('video/') ? 'video' as const : 'image' as const,
      url: URL.createObjectURL(file),
      uploadedAt: new Date()
    }));

    setGalleryItems(prev => [...newItems, ...prev]);
    setUploadForm({ name: '', message: '', files: [] });
    setShowUploadForm(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-slate-700 mb-2">Photo Gallery</h1>
        <p className="text-slate-600">Share your memories and well wishes with us!</p>
      </div>

      {/* Upload Section */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-slate-700">
            <Upload className="text-green-600 h-5 w-5" />
            <span>Share Your Photos & Videos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!showUploadForm ? (
            <div className="text-center py-8">
              <Button 
                onClick={() => setShowUploadForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Photos/Videos
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Your Name *</label>
                  <Input
                    value={uploadForm.name}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-white/50 border-green-200 focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-2">Files *</label>
                  <Input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    required
                    className="bg-white/50 border-green-200 focus:border-green-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <Textarea
                  value={uploadForm.message}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Share a memory, well wishes, or anything you'd like to say!"
                  className="bg-white/50 border-green-200 focus:border-green-400"
                  rows={3}
                />
              </div>

              <div className="flex space-x-4">
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  disabled={!uploadForm.name || uploadForm.files.length === 0}
                >
                  Upload & Share
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowUploadForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="bg-white/70 backdrop-blur-sm border-green-100 shadow-lg overflow-hidden">
            <div className="aspect-square relative overflow-hidden">
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt="Gallery item"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-slate-700">{item.name}</span>
              </div>
              {item.message && (
                <p className="text-sm text-slate-600 leading-relaxed">{item.message}</p>
              )}
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-slate-500">
                  {item.uploadedAt.toLocaleDateString()}
                </span>
                <Heart className="h-4 w-4 text-pink-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {galleryItems.length === 0 && (
        <Card className="bg-white/70 backdrop-blur-sm border-green-100 shadow-lg">
          <CardContent className="p-12 text-center">
            <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-slate-600">No photos uploaded yet. Be the first to share!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}