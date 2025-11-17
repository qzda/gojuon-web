import { 清音 } from "@/data";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-default">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center sm:items-start p-10 ">
        <div className="text-xl w-full flex-auto flex flex-col gap-1">
          {清音.map((row, rowIndex) => {
            return (
              <div
                key={rowIndex}
                className="w-full flex-auto flex justify-between gap-2"
              >
                {row.map((col, colIndex) => {
                  return (
                    <div key={colIndex}>
                      {col ? `${col.hiragana} ${col.katakana}` : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
