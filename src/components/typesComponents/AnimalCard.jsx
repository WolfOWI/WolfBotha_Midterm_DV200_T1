function AnimalCard() {
  return (
    <div
      class="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition"
      href="#"
    >
      <img
        class="w-full rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt=" image"
      />
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">Card title</h3>
        <p class="mt-1 text-gray-500">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
      </div>
    </div>
  );
}

export default AnimalCard;
