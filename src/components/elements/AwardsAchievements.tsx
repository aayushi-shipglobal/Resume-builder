import { Input } from "../ui/input";
import { Switch } from "@/components/ui/switch";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
      <div className="flex space-x-0 items-start justify-between ">
        <FormField
          control={control}
          name="awardsAchievements"
          render={({ field }) => (
            <FormItem className={` w-full`}>
              <FormControl>
                <div>
                  {Open && (
                    <Input
                      placeholder="Use comma to separate Achievement"
                      {...field}
                      disabled={Open ? false : true}
                      className="mt-5 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
