import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { useState } from "react";

function FilterActive({ onChange }: { onChange: (value: number) => void }) {
  const options = [
    { value: 0, label: "Activos" },
    { value: 1, label: "Inactivos" },
  ];

  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (value: number) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex flex-rows-2 gap-2">
      <h1 className="text-2xl font-bold">Ver: </h1>
      <Combobox
        items={options}
        defaultValue="Activos"
        onValueChange={(label) => {
          const option = options.find((o) => o.label === label);
          if (option) handleSelect(option.value);
        }}
      >
        <ComboboxInput />
        <ComboboxContent>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.label}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default FilterActive;
