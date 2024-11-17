import { AddRecipeForm } from "@/components";

export default function AddRecipePage() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <span>
          Los campor marcados con <span className="text-red-500">*</span> son
          obligatorios
        </span>
        <AddRecipeForm />
      </div>
    </div>
  );
}
