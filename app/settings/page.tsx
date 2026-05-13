"use client";

import { motion } from "framer-motion";
import { Settings, User, Sun, Moon, Monitor, Bell } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/animations";
import { useTheme } from "next-themes";
import { useLocale } from "@/context/locale-context";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">{t("settings.title")}</h1>
          <p className="text-muted-foreground">{t("settings.subtitle")}</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full max-w-md mb-6">
              <TabsTrigger value="profile" className="gap-2"><User className="w-4 h-4" /> {t("settings.profile")}</TabsTrigger>
              <TabsTrigger value="appearance" className="gap-2"><Sun className="w-4 h-4" /> {t("settings.theme")}</TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2"><Bell className="w-4 h-4" /> {t("settings.notifications")}</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">{t("settings.profileInfo")}</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t("settings.name")}</Label>
                    <Input id="name" placeholder={t("settings.namePlaceholder")} defaultValue="" />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">{t("settings.dueDate")}</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cycleLength">{t("settings.cycleLength")}</Label>
                      <Input id="cycleLength" type="number" defaultValue="28" />
                    </div>
                    <div>
                      <Label htmlFor="periodLength">{t("settings.periodLength")}</Label>
                      <Input id="periodLength" type="number" defaultValue="5" />
                    </div>
                  </div>
                  <Button className="gap-2">
                    <Settings className="w-4 h-4" />
                    {t("common.save")}
                  </Button>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="appearance">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">{t("settings.themePreferences")}</h2>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="w-6 h-6" />
                    <span className="text-xs">{t("settings.light")}</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="w-6 h-6" />
                    <span className="text-xs">{t("settings.dark")}</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex-col gap-2 h-24"
                    onClick={() => setTheme("system")}
                  >
                    <Monitor className="w-6 h-6" />
                    <span className="text-xs">{t("settings.system")}</span>
                  </Button>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="notifications">
              <GlassCard>
                <h2 className="font-display font-semibold mb-4">{t("settings.notificationPrefs")}</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{t("settings.appointmentReminders")}</div>
                      <div className="text-xs text-muted-foreground">{t("settings.appointmentRemindersDesc")}</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{t("settings.medicationReminders")}</div>
                      <div className="text-xs text-muted-foreground">{t("settings.medicationRemindersDesc")}</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{t("settings.weeklyInsights")}</div>
                      <div className="text-xs text-muted-foreground">{t("settings.weeklyInsightsDesc")}</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="disclaimer-banner">
          <p className="font-semibold text-xs mb-1">{t("settings.dataPrivacy")}</p>
          <p>{t("settings.dataPrivacyDesc")}</p>
        </div>
      </motion.div>
    </div>
  );
}
