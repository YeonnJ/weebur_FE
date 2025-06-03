"use client";

import { useForm } from "react-hook-form";
import { ProductRequestBody } from "@/app/(products)/_types";
import FormInput from "./_components/formInput/FormInput";
import RadioGroup from "./_components/radioGroup/RadioGroup";
import { useCreateProduct } from "../_queries";
import * as styles from "./ProductFormPage.css";
import { useRouter } from "next/navigation";

const CreateProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProductRequestBody>();
  const { mutate: create } = useCreateProduct();
  const router = useRouter();

  const onSubmit = (data: ProductRequestBody) => {
    create(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  const price = watch("price");
  const discountPercentage = watch("discountPercentage");

  const getDiscountedPrice = () => {
    if (price && discountPercentage) {
      const discounted =
        Number(price) - (Number(price) * Number(discountPercentage)) / 100;
      return Math.floor(discounted);
    }
    return null;
  };

  const discountedPrice = getDiscountedPrice();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <FormInput
        label="상품명"
        register={register("title", {
          required: "상품명은 필수입니다.",
          max: {
            value: 15,
            message: "15자 이내로 입력되어야 합니다.",
          },
        })}
        error={errors.title}
        placeholder="상품명을 입력해주세요."
      />

      <FormInput
        label="상품설명"
        register={register("description")}
        placeholder="상품설명을 입력해주세요."
      />

      <FormInput
        label="상품가격"
        type="number"
        register={register("price", {
          required: "가격은 필수입니다.",
          min: {
            value: 1000,
            message: "1000원 이상으로 입력해야 합니다.",
          },
        })}
        error={errors.price}
        placeholder="가격을 입력해주세요."
      />

      <FormInput
        label="상품할인율"
        type="number"
        register={register("discountPercentage", {
          max: {
            value: 100,
            message: "100이내로 입력해야 합니다.",
          },
        })}
        error={errors.discountPercentage}
        placeholder="할인율을 입력해주세요."
      />

      <RadioGroup
        name="brand"
        register={register("brand")}
        defaultValue="Weebur"
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Samsung", value: "Samsung" },
          { label: "Weebur", value: "Weebur" },
        ]}
      />

      {discountedPrice !== null && !isNaN(discountedPrice) && (
        <p>상품 최종가격: {discountedPrice.toLocaleString()}원</p>
      )}

      <input type="submit" value="제출" className={styles.submit} />
    </form>
  );
};

export default CreateProductPage;
