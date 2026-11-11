import { useEffect, memo, useRef } from "react";
import { ArrowUpRight, Download, X } from "lucide-react";
import { profile } from "../data/profile";

const academicRecordImages = profile.academicRecord.pages;
const gpaLabel = `${profile.gpa.toFixed(2).replace(".", ",")} / ${profile.gpaScale.toFixed(2).replace(".", ",")}`;

const AcademicRecordModal = memo(({ open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="academic-record-title"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#061A2F] border border-white/10 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#061A2F]/95 px-5 py-4 backdrop-blur-xl">
          <div>
            <h3 id="academic-record-title" className="text-xl sm:text-2xl font-bold text-white">Transkrip Nilai</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">IPK sementara {gpaLabel} · {academicRecordImages.length} halaman</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Tutup transkrip nilai"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-white/10 px-5 py-4 text-sm">
          <a href={profile.academicRecord.document} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-blue-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            Buka PDF <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.academicRecord.document} download className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-blue-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            <Download className="h-4 w-4" aria-hidden="true" /> Unduh PDF
          </a>
        </div>

        <div className="space-y-5 p-4 sm:p-6">
          {academicRecordImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Transkrip nilai Muhammad Nafi Nusron, halaman ${index + 1}`}
              className="w-full rounded-xl border border-white/10 bg-white object-contain shadow-lg"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
});


export default AcademicRecordModal;
