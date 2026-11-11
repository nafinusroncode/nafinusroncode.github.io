import { Link } from "react-router-dom";
import { ArrowUpRight, Award, FileText } from "lucide-react";
import PropTypes from "prop-types";

const CardCertificate = ({ certificate }) => (
  <Link
    to={`/certificate/${certificate.id}`}
    className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    aria-label={`Lihat detail ${certificate.Title}`}
  >
    <div className="relative m-5 mb-0 flex h-56 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0a1e33] p-3">
      <img
        src={certificate.Img}
        alt={`Pratinjau ${certificate.Title}`}
        loading="lazy"
        className="h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-3 right-3 rounded-full border border-blue-300/20 bg-[#011224]/90 p-2 text-blue-200">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-blue-300">
        <Award className="h-4 w-4" aria-hidden="true" />
        {certificate.Authority ? "Sertifikasi BNSP" : "Certificate"}
      </div>
      <h3 className="text-xl font-semibold leading-snug text-blue-100">{certificate.Title}</h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">{certificate.Description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
        <span className="flex items-center gap-1.5 text-slate-400">
          <FileText className="h-4 w-4" aria-hidden="true" />
          {certificate.Document ? "Dokumen PDF" : "Dokumen sertifikat"}
        </span>
        <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 font-medium text-white group-hover:bg-white/10">
          Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  </Link>
);

CardCertificate.propTypes = { certificate: PropTypes.object.isRequired };

export default CardCertificate;
