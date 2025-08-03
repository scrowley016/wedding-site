import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Heart, Users } from 'lucide-react';

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guestCount: '1',
    dietaryRestrictions: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/70 backdrop-blur-sm border-green-100 shadow-lg">
          <CardContent className="p-8 text-center">
            <Heart className="text-green-600 h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-slate-700 mb-4">Thank You!</h2>
            <p className="text-slate-600">
              We've received your RSVP and can't wait to celebrate with you!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-slate-700 mb-2">RSVP</h1>
        <p className="text-slate-600">Please respond by September 1, 2026</p>
      </div>

      <Card className="bg-white/70 backdrop-blur-sm border-green-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-700">Wedding Response</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="bg-white/50 border-green-200 focus:border-green-400"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="bg-white/50 border-green-200 focus:border-green-400"
                />
              </div>
            </div>

            <div>
              <Label>Will you be attending? *</Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) => handleInputChange('attendance', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes, I'll be there!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Sorry, I can't make it</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === 'yes' && (
              <>
                <div>
                  <Label htmlFor="guestCount">Number of Guests</Label>
                  <Select value={formData.guestCount} onValueChange={(value) => handleInputChange('guestCount', value)}>
                    <SelectTrigger className="bg-white/50 border-green-200 focus:border-green-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dietary">Dietary Restrictions or Allergies</Label>
                  <Input
                    id="dietary"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                    placeholder="Please let us know of any dietary needs"
                    className="bg-white/50 border-green-200 focus:border-green-400"
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="message">Message for the Couple</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Share your well wishes, favorite memory, or advice!"
                className="bg-white/50 border-green-200 focus:border-green-400"
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={!formData.name || !formData.email || !formData.attendance}
            >
              Submit RSVP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}