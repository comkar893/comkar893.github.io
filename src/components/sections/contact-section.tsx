
'use client';

import { useFormStatus } from 'react-dom';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      size="lg" 
      className={cn(
        "bg-transparent border border-primary text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-transparent flex items-center gap-2",
        pending && "cursor-not-allowed bg-transparent text-primary border-primary", // Keep border and text for pending
        {"disabled:opacity-50 disabled:cursor-not-allowed disabled:text-muted-foreground disabled:border-muted-foreground/50 disabled:shadow-none hover:bg-transparent": pending} // Ensure disabled pending also has transparent hover
      )}
      aria-disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" /> Send Message
        </>
      )}
    </Button>
  );
}

const ContactSection = () => {
  // Contact form disabled for now: static hosting (GitHub Pages) can't run the server action.
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a question, a project idea, or just want to say hi? I'd love to hear from you!"
    >
      <Card className="max-w-2xl mx-auto shadow-2xl border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Send me a message</CardTitle>
          <CardDescription className="text-center">
            The contact form is temporarily unavailable. Please check back soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="bg-card border-border focus:ring-primary focus:border-primary"
                aria-describedby="name-error"
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="bg-card border-border focus:ring-primary focus:border-primary"
                aria-describedby="email-error"
              />
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                className="bg-card border-border focus:ring-primary focus:border-primary min-h-[120px]"
                aria-describedby="message-error"
              />
            </div>
            <div className="flex justify-end">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default ContactSection;
