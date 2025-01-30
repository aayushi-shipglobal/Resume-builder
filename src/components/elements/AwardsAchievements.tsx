import { Input } from "../ui/input";
import { Switch } from "@/components/ui/switch";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus } from "lucide-react";

type AwardsAchievementsProps = {
  control: any;
  onClick: any;
  Open: boolean;
};
export const AwardsAchievements = ({ control, onClick, Open }: AwardsAchievementsProps) => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <FormLabel className="mt-6 text-md md:text-xl font-bold dark:text-white">Awards and Achievements</FormLabel>
        <Switch className="mt-8 mb-1" onClick={onClick} />
      </div>
      <hr />
      {Open && (
        <div>
          <div className="flex space-x-0 items-start justify-between ">
            <FormField
              control={control}
              name="awardsAchievements"
              render={({ field }) => (
                <FormItem className={` w-full`}>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Use comma to separate Achievement"
                        {...field}
                        disabled={Open ? false : true}
                        className="mt-5 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="text-sm underline text-teal-700 font-bold mt-3 flex items-center cursor-pointer">
            <Plus className="size-4" />
            Add Achievements
          </div>
        </div>
      )}
    </div>
  );
};
