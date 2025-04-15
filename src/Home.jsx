import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Visanations.org</h1>
        <p className="text-lg text-gray-600">
          Your AI-powered global visa assistant, now online.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6 text-center">
            <GlobeIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Meet Vina</h2>
            <p className="text-gray-700 mb-4">
              Vina is here to help you find visa requirements, embassy forms, and guidance for work, travel, and study.
            </p>
            <Button className="w-full" variant="default">
              Launch Vina AI Assistant
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Visanations.org. All rights reserved.
      </div>
    </main>
  );
}