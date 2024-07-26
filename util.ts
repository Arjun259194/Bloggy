import toast from "react-hot-toast";

/**
 * This function will return list of counrty dial code.
 * The function can throw error so error handling is required
 * @returns Array of Counrty Dial codes as string. eg. ["+91", "+1", ...]
 */
export async function getCounrtyDialCode() {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/codes"
  );
  const json = await res.json();
  if (json.error) throw new Error("Can't fetch countries");
  return json.data as { name: string; code: string; dial_code: string }[];
}

export function toastPromise<T>(
  p: Promise<T>,
  sucFn: (data: T) => string = () => "Done!",
  errFn: (err: unknown) => string = (err) => {
    console.error(err);
    return "Failed";
  }
) {
  return toast.promise(p, {
    loading: "loading..",
    success: sucFn,
    error: errFn,
  });
}

