interface ResumeComponentProps {
    Icon: any;
    title: string;
    placeholder: string;
  }
  
 export const ResumeComponent = ({ Icon, title, placeholder }:  ResumeComponentProps) => {
    return (
      <p className="flex items-center gap-1">
        <Icon className="size-4" />
        {title && title.length > 0 ? title : placeholder}
      </p>
    );
  };