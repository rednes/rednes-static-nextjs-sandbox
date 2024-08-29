import { Tabs, TabsList, TabsTrigger } from "@/lib/shadcn/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Tabs defaultValue="hello" className="w-[90%] h-[90%]">
        <TabsList className="grid grid-cols-2 justify-stretch space-x-2 w-full">
          <TabsTrigger value="hello">Hello</TabsTrigger>
          <TabsTrigger value="world">World</TabsTrigger>
        </TabsList>
        <TabsContent value="hello" className="h-full">
          <div className="flex justify-center items-center drop-shadow-xl text-xl h-full">
            <p className="animate-bounce">Hello</p>
            <p>,World</p>
          </div>
        </TabsContent>
        <TabsContent value="world" className="h-full">
          <div className="flex justify-center items-center drop-shadow-xl text-xl h-full">
            <p>Hello,</p>
            <p className="animate-bounce">World</p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
