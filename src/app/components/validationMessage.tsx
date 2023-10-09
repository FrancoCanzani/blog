import { XCircle } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export default function ValidationMessage({
  message,
  outcome,
}: {
  message: string | null;
  outcome: 'success' | 'error' | null;
}) {
  return message ? (
    <p
      className={`text-sm animate-fade gap-2 px-2 py-1 ${
        outcome === 'error' ? 'bg-red-50' : 'bg-green-50'
      } rounded-md w-full flex items-center justify-start`}
    >
      {outcome == 'error' ? <XCircle size={15} /> : <CheckCircle2 size={15} />}
      {message}
    </p>
  ) : null;
}
