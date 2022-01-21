function HeaderLink({Icon,title}) {
  return (
    <div className="flex flex-col justify-center cursor-pointer items-center text-gray-500 group hover:text-gray-700 ">
     <Icon className="h-7 w-7 group-hover:animate-bounce " />
     <h4 className="text-sm opacity-40 group-hover:opacity-100 ">{title}</h4>
    </div>
  );
}

export default HeaderLink;
