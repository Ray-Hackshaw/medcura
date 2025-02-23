import { Bookmark } from "lucide-react";

export const BookmarkedAppointments = ({
  hasBookmarks,
}: {
  hasBookmarks: boolean;
}) => {
  return (
    <div className="shadow-lg rounded-md lg:rounded-lg w-full mx-auto lg:max-w-full overflow-hidden border">
      <div className="flex items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold">
        <Bookmark />
        <p>Bookmarked Appointments</p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row p-2 bg-white">
        {!hasBookmarks && (
          <div className="text-sm md:text-base text-center w-full ">
            You have not bookmarked any appointments.
            <p>
              Click on an appointment and click on the{" "}
              <span className="inline-flex align-middle">
                <Bookmark />
              </span>{" "}
              icon to flag it for later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
