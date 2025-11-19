import { 拗音, 清音, 濁音 } from "@/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex h-screen justify-center font-default">
      <main className="text-xl lg:text-2xl h-full w-full max-w-5xl flex flex-col gap-2 px-10 py-6">
        <Tabs
          defaultValue="清音"
          className="w-full flex-auto"
        >
          <div className="flex justify-center sm:justify-start mb-4">
            <TabsList className="">
              <TabsTrigger value="清音">清音</TabsTrigger>
              <TabsTrigger value="濁音">濁音</TabsTrigger>
              <TabsTrigger value="拗音">拗音</TabsTrigger>
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
