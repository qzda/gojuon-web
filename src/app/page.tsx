import { Cells } from "@/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="h-full w-full max-w-5xl text-xl md:text-2xl flex flex-col gap-2 mx-auto">
      <Tabs
        defaultValue="清音"
        className="w-full flex-auto"
      >
        <div className="flex justify-center mb-4 select-none">
          <TabsList>
            {Cells.map(({ key }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="cursor-pointer text-sm md:text-base"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Cells.map(({ key, value }) => (
          <TabsContent
            key={key}
            value={key}
            className="w-full flex flex-col gap-2"
          >
            {value.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="flex-auto flex justify-between gap-2"
                >
                  {row.map((col, colIndex) => {
                    return (
                      <div key={colIndex}>
                        <span className="cursor-pointer hover:text-sakura">
                          {col ? `${col.hiragana} ${col.katakana}` : ""}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
