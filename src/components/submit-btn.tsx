import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="group relative flex items-center justify-center gap-2 h-10 w-36 rounded-full px-6 text-sm font-medium transition-all
        bg-gray-900 text-white shadow-md hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700
        active:scale-95 disabled:opacity-50 disabled:pointer-events-none
        dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-white">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-black dark:border-t-transparent" />
      ) : (
        <>
          <span className="text-lg">Envoyer</span>
          <FaPaperPlane className="text-sm opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
