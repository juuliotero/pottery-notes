import React, { FormEvent, useState } from "react";
import { api } from "~/utils/api";
import "react-toastify/dist/ReactToastify.css";

export default function Ingredient() {
  const categories = api.category.getAll.useQuery().data;
  const [ingredientName, setIngredientName] = useState("");
  const [categoryId, setCategoryId] = useState(
    categories?.length ? categories[0]?.id : "",
  );

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { mutate } = api.ingredient.create.useMutation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const ingredient = mutate({
      name: ingredientName,
      categoryId: Number(categoryId),
    });
    setIngredientName("");
    setCategoryId("");
    setShowSuccessMessage(true);
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <form onSubmit={(event) => handleSubmit(event)} method="post">
        <div className="-mx-3 mb-6 flex flex-wrap">
          {showSuccessMessage && (
            <div className="mb-6 w-full px-3 ">
              <span className="text-success">Creado con exito!</span>
            </div>
          )}
          <div className="mb-6 w-full px-3 md:mb-0">
            <h1 className="text-gray-900 mb-4 text-xl font-bold tracking-tight">
              Crear nuevo ingrediente
            </h1>
          </div>
          <div className="mb-6 w-full px-3 md:mb-0">
            <label className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide">
              Nombre
            </label>
            <input
              className="bg-gray-200 text-gray-700 border-red-500 mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight focus:bg-white focus:outline-none"
              type="text"
              id="ingredientName"
              name="ingredientName"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            ></input>
          </div>
          <div className="w-full px-3">
            <label className="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide">
              Categoría
            </label>
            <select
              required
              id="categoryName"
              name="categoryName"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="border-gray-400 hover:border-gray-500 focus:shadow-outline block w-full appearance-none rounded border bg-white px-4 py-2 pr-8 leading-tight shadow focus:outline-none"
            >
              <option hidden>Seleccionar...</option>
              {categories?.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-6 w-full px-3">
            <button
              className="bg-brand rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
              type="submit"
              disabled={!categoryId || !ingredientName}
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
