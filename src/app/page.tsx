import { 拗音, 清音, 濁音 } from "@/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <main className="font-default text-xl md:text-2xl lg:text-3xl h-full w-full max-w-5xl flex flex-col gap-2 px-10 py-6 mx-auto">
        <Tabs
          defaultValue="清音"
          className="w-full flex-auto"
        >
          <div className="flex justify-center mb-4">
            <TabsList>
              <TabsTrigger
                value="清音"
                className="cursor-pointer"
              >
                清音
              </TabsTrigger>
              <TabsTrigger
                value="濁音"
                className="cursor-pointer"
              >
                濁音
              </TabsTrigger>
              <TabsTrigger
                value="拗音"
                className="cursor-pointer"
              >
                拗音
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent
            value="清音"
            className="w-full flex flex-col gap-2"
          >
            {清音.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="flex-auto flex justify-between gap-2"
                >
                  {row.map((col, colIndex) => {
                    return (
                      <div
                        key={colIndex}
                        className="cursor-pointer"
                      >
                        {col ? `${col.hiragana} ${col.katakana}` : ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </TabsContent>

          <TabsContent
            value="濁音"
            className="w-full flex flex-col gap-2"
          >
            {濁音.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="flex-auto flex justify-between gap-2"
                >
                  {row.map((col, colIndex) => {
                    return (
                      <div
                        key={colIndex}
                        className="cursor-pointer"
                      >
                        {col ? `${col.hiragana} ${col.katakana}` : ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </TabsContent>

          <TabsContent
            value="拗音"
            className="w-full flex flex-col gap-2"
          >
            {拗音.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="flex-auto flex justify-between gap-2"
                >
                  {row.map((col, colIndex) => {
                    return (
                      <div
                        key={colIndex}
                        className="cursor-pointer"
                      >
                        {col ? `${col.hiragana} ${col.katakana}` : ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
