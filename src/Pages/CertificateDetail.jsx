import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, Award, Check, ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import { profile } from "../data/profile";
import { readCachedCertificates } from "../utils/certificates";

const backUrl = "/?tab=certificates#Portofolio";
const actionClass = "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-blue-100 transition hover:border-blue-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

export default function CertificateDetail() {
  const { id } = useParams();
  const [pageIndex, setPageIndex] = useState(0);
  const certificate = readCachedCertificates().find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setPageIndex(0);
  }, [id]);

  if (!certificate) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#011224] px-6 text-center text-white">
        <FileText className="h-12 w-12 text-blue-300" aria-hidden="true" />
        <h1 className="text-2xl font-semibold">Sertifikat tidak ditemukan</h1>
        <Link to={backUrl} className={actionClass}><ArrowLeft className="h-4 w-4" /> Kembali ke Certificates</Link>
      </main>
    );
  }

  const pages = certificate.Pages?.length ? certificate.Pages : [certificate.Img];
  const information = [
    ["Pemegang sertifikat", certificate.Holder],
    ["Lembaga penerbit", certificate.Issuer],
    ["Otoritas sertifikasi", certificate.Authority],
    ["Tanggal terbit", certificate.IssuedAt],
    ["Masa berlaku", certificate.Validity],
    ["Nomor sertifikat", certificate.Number],
    ["Nomor registrasi", certificate.Registration],
  ].filter(([, value]) => value);

  return (
    <>
      <Helmet>
        <title>{certificate.Title} - {profile.fullName}</title>
        <meta name="description" content={certificate.Description} />
        <link rel="canonical" href={`${profile.siteUrl}/certificate/${certificate.id}`} />
      </Helmet>
      <main className="relative min-h-screen bg-[#011224] px-[5%] pb-20 text-slate-200 md:px-[10%]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6">
          <Link to={backUrl} className="inline-flex items-center gap-2 rounded-lg py-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Kembali ke Certificates
          </Link>
          <span className="text-sm font-semibold text-blue-200">{profile.brandName}</span>
        </header>

        <div className="grid items-start gap-10 pt-10 lg:grid-cols-2 lg:gap-12 lg:pt-14">
          <div className="min-w-0">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
              <Award className="h-4 w-4" aria-hidden="true" />
              {certificate.Authority ? "SERTIFIKASI KOMPETENSI BNSP" : "CERTIFICATE"}
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-blue-100 md:text-4xl">{certificate.Title}</h1>
            <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">{certificate.Description}</p>

            {information.length > 0 && (
              <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-800/40 px-5">
                {information.map(([label, value]) => (
                  <div key={label} className="grid gap-1 py-4 text-sm sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                    <dt className="text-slate-400">{label}</dt>
                    <dd className="break-words font-medium leading-relaxed text-slate-200">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {certificate.Competencies?.length > 0 && (
              <section className="mt-9" aria-labelledby="competencies-title">
                <h2 id="competencies-title" className="flex items-center gap-2 text-xl font-semibold text-white">
                  <Award className="h-5 w-5 text-blue-300" aria-hidden="true" /> Unit kompetensi
                </h2>
                <p className="mt-2 text-sm text-slate-400">{certificate.Competencies.length} unit kompetensi yang tercantum dalam sertifikat.</p>
                <ul className="mt-4 space-y-3">
                  {certificate.Competencies.map((competency) => (
                    <li key={competency} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />{competency}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <section className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40" aria-labelledby="document-title">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
              <h2 id="document-title" className="flex items-center gap-2 text-sm font-semibold text-white">
                <FileText className="h-4 w-4 text-blue-300" aria-hidden="true" /> Dokumen sertifikat
              </h2>
              <span className="text-xs text-slate-400">{pages.length} halaman</span>
            </div>
            <div className="p-3 sm:p-5">
              <a href={pages[pageIndex]} target="_blank" rel="noopener noreferrer" className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" aria-label={`Perbesar halaman ${pageIndex + 1} sertifikat (tab baru)`}>
                <img src={pages[pageIndex]} alt={`${certificate.Title}, halaman ${pageIndex + 1}${pageIndex === 1 ? ": daftar unit kompetensi" : ""}`} className="aspect-[985/1400] w-full rounded-lg bg-white object-contain" />
              </a>
              {pages.length > 1 && (
                <nav aria-label="Halaman dokumen sertifikat" className="mt-4 flex items-center justify-between gap-2">
                  <button type="button" onClick={() => setPageIndex((current) => current - 1)} disabled={pageIndex === 0} aria-label="Halaman sebelumnya" className={`${actionClass} !p-2.5 disabled:cursor-not-allowed disabled:opacity-30`}>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <span className="text-sm text-slate-300" aria-live="polite">Halaman {pageIndex + 1} dari {pages.length}</span>
                  <button type="button" onClick={() => setPageIndex((current) => current + 1)} disabled={pageIndex === pages.length - 1} aria-label="Halaman berikutnya" className={`${actionClass} !p-2.5 disabled:cursor-not-allowed disabled:opacity-30`}>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              )}
              <p className="mt-3 text-center text-xs text-slate-400">Klik dokumen untuk melihat gambar ukuran penuh.</p>
            </div>
            {certificate.Document && (
              <div className="grid grid-cols-1 gap-3 border-t border-white/10 p-4 sm:grid-cols-2 sm:p-5">
                <a href={certificate.Document} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  Buka PDF <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={certificate.Document} download className={actionClass}>
                  <Download className="h-4 w-4" aria-hidden="true" /> Unduh PDF
                </a>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
