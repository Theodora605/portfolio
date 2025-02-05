const NameFrame = () => {
  return (
    <div className="inline-block w-[400px]">
      <div className="flex flex-col">
        <p className="text-5xl mb-1 text-dark-brown font-bold">
          <i>Theo Goossens</i>
        </p>
        <div className="inline-block bg-light-brown p-1 rounded self-end">
          <p className="inline-block text-white">Full-stack developer</p>
        </div>
      </div>
    </div>
  );
};

export default NameFrame;
