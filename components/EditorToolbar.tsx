"use client";

interface EditorToolbarProps {
  onFormat?: (format: string) => void;
}

export function EditorToolbar({ onFormat }: EditorToolbarProps) {
  const formats = [
    { icon: "format_bold", label: "Bold" },
    { icon: "format_italic", label: "Italic" },
    { icon: "format_list_bulleted", label: "Bullet List" },
    { icon: "link", label: "Link" },
    { icon: "code", label: "Code" },
    { icon: "image", label: "Image" },
  ];

  return (
    <div className="flex border-t border-slate-300 dark:border-[#654834] item-center px-[15px] py-2">
      <div className="flex items-center gap-1">
        {formats.map((format) => (
          <button
            key={format.icon}
            onClick={() => onFormat?.(format.icon)}
            className="flex items-center justify-center p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
            title={format.label}
          >
            <span className="material-symbols-outlined text-slate-500 dark:text-[#c8a993] text-lg">
              {format.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

