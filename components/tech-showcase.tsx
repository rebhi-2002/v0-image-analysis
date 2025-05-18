"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState("interactive-chart")
  const [chartData, setChartData] = useState<number[]>([])

  // Generate random data for the chart on component mount
  useEffect(() => {
    const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    setChartData(data)
  }, [])

  // Regenerate data when clicking the chart
  const regenerateData = () => {
    const newData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
    setChartData(newData)
  }

  return (
    <Tabs defaultValue="interactive-chart" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
        <TabsTrigger value="interactive-chart">Interactive Chart</TabsTrigger>
        <TabsTrigger value="code-snippet">Code Snippet</TabsTrigger>
        <TabsTrigger value="animation">Animation</TabsTrigger>
      </TabsList>

      <TabsContent value="interactive-chart">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Chart</CardTitle>
            <CardDescription>
              A responsive bar chart built with React. Click on the chart to regenerate data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full cursor-pointer" onClick={regenerateData}>
              <div className="flex h-full items-end justify-between gap-1">
                {chartData.map((value, index) => (
                  <div key={index} className="relative flex w-full flex-col items-center">
                    <div
                      className="w-full bg-primary transition-all duration-500 ease-in-out"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="mt-2 text-xs">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Click on the chart to regenerate random data</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="code-snippet">
        <Card>
          <CardHeader>
            <CardTitle>Code Snippet</CardTitle>
            <CardDescription>
              A sample of my React code showing a custom hook for handling API requests.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
              <code>{`import { useState, useEffect } from 'react';

// Custom hook for fetching data with loading and error states
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err instanceof Error ? err : new Error(String(err)));
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="animation">
        <Card>
          <CardHeader>
            <CardTitle>Animation Demo</CardTitle>
            <CardDescription>A simple animation built with CSS and React state.</CardDescription>
          </CardHeader>
          <CardContent className="flex min-h-[300px] items-center justify-center">
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-b-4 border-t-4 border-primary"></div>
              <div className="absolute inset-0 animate-spin-reverse-slow rounded-full border-l-4 border-r-4 border-secondary"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-background"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold">React</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
