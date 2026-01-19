type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="
      mx-auto
      w-full
      max-w-7xl
      px-4
      sm:px-6
      lg:px-8
      py-6
    ">
      {children}
    </div>
  );
};
