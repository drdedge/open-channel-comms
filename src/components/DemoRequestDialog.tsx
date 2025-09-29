import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

interface DemoRequestDialogProps {
  children: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  organisation: string;
  reason: string;
}

const DemoRequestDialog = ({ children }: DemoRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organisation: "",
    reason: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload: TablesInsert<"signup_submissions"> = {
        name: formData.name,
        email: formData.email,
        organisation: formData.organisation || null,
        reason: formData.reason || null,
        metadata: { source: "demo_request" }
      };

      const { error } = await supabase
        .from("signup_submissions")
        .insert([payload]);
      
      if (error) throw error;

      toast({
        title: "Demo Request Received",
        description: "We'll follow up within 24 hours to coordinate the SilentSpeak walkthrough.",
      });

      setFormData({ name: "", email: "", organisation: "", reason: "" });
      setOpen(false);
    } catch (error) {
      console.error('Demo request error:', error);
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Share a few details about your organisation and we will arrange a SilentSpeak session when you're ready.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organisation">Organization</Label>
            <Input
              id="organisation"
              value={formData.organisation}
              onChange={(e) => handleInputChange("organisation", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Why are you interested in SilentSpeak?</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
