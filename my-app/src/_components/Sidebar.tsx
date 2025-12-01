import { ScrollArea } from "@/components/ui/scroll-area";


const historyItems = [
  "Genghis Khan",
  "Figma ашиглах заавар",
  "Санхүүгийн шийдвэрүүд",
  "Figma-д загвар зохион бүтээх аргачлалууд",
  "Санхүүгийн технологи 2023",
  "Хэрэглэгчийн интерфейс дизайн чиглэлийг туршлага",
  "Архитектур загварчлалын хотөлбөрүүд",
  "Эрүүл амьдралын хэв маяг",
  "Технологийн салбарт хийж буй инноваци",
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <h2 className="p-4 font-bold border-b border-gray-200">History</h2>
      <ScrollArea className="h-[calc(100vh-48px)]">
        <ul className="p-2 space-y-2">
          {historyItems.map((item, idx) => (
            <li
              key={idx}
              className="p-2 hover:bg-gray-100 rounded cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
}
