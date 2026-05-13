"use client";

import { motion } from "framer-motion";
import { Settings, User, Sun, Moon, Monitor, Bell, Clock } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/animations";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your preferences and profile</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full max-w-md mb-6">
              <TabsTrigger value="profile" className="gap-2"><User className="w-4 h-4" /> Profile</TabsTrigger>
              <TabsTrigger value="appearance" className="gap-2"><Sun className="w-4 h-4" /> Theme</TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2"><Bell className="w-4 h-4" /> Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" defaultValue="" />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cycleLength">Cycle Length (days)</Label>
                      <Input id="cycleLength" type="number" defaultValue="28" />
                    </div>
                    <div>
                      <Label htmlFor="periodLength">Period Length (days)</Label>
                      <Input id="periodLength" type="number" defaultValue="5" />
                    </div>
                  </div>
                  <Button className="gap-2">
                    <Settings className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="appearance">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">Theme Preferences</h2>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="w-6 h-6" />
                    <span className="text-xs">Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="w-6 h-6" />
                    <span className="text-xs">Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("system")}
                  >
                    <Monitor className="w-6 h-6" />
                    <span className="text-xs">System</span>
                  </Button>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="notifications">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Appointment Reminders</div>
                      <div className="text-xs text-muted-foreground">Get notified about upcoming prenatal appointments</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Medication Reminders</div>
                      <div className="text-xs text-muted-foreground">Daily reminders for prenatal vitamins</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Weekly Insights</div>
                      <div className="text-xs text-muted-foreground">Weekly updates about your baby's development</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="disclaimer-banner">
          <p className="font-semibold text-xs mb-1">Data Privacy</p>
          <p>Your settings are stored locally on your device. We do not collect or store your personal health information.</p>
        </div>
      </motion.div>
    </div>
  );
}
