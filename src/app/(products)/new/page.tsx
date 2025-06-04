"use client";

import { Controller, useForm } from "react-hook-form";
import { ProductRequestBody } from "@/app/(products)/_types";
import FormInput from "@/components/formInput/FormInput";
import { useCreateProductMutation } from "../_queries";
import * as styles from "./page.css";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import Radio from "@/components/radio/Radio";
import ProductPriceInfo from "./_components/productPriceInfo/ProductPriceInfo";
import { getNumricString } from "@/utils/string";

const ProductNewPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm<ProductRequestBody>({
    mode: "onChange",
  });

  const price = watch("price");
  const discountPercentage = watch("discountPercentage");

  const createProductMutation = useCreateProductMutation();

  const onSubmit = (data: ProductRequestBody) => {
    createProductMutation.mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  const getDiscountedPrice = () => {
    const priceToUse = Number(price || 0);

    if (discountPercentage) {
      const discounted =
        priceToUse - (priceToUse * Number(discountPercentage)) / 100;
      return Math.floor(discounted);
    }
    return priceToUse;
  };

  const discountedPrice = getDiscountedPrice();
  const radioRegister = register("brand");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <FormInput
        required
        label="상품명"
        maxLength={15}
        error={errors.title}
        placeholder="상품명을 입력해주세요."
        {...register("title", {
          required: "상품명은 필수입니다.",
        })}
      />

      <FormInput
        required={false}
        label="상품설명"
        placeholder="상품설명을 입력해주세요."
        {...register("description")}
      />

      <Controller
        control={control}
        name="price"
        rules={{
          required: "가격은 필수입니다.",
          min: {
            value: 1000,
            message: "1000원 이상으로 입력해야 합니다.",
          },
        }}
        render={({ field }) => (
          <FormInput
            required
            label="상품가격"
            type="text"
            maxLength={10}
            value={field?.value ?? ""}
            error={errors.price}
            onChange={(e) => field.onChange(getNumricString(e.target.value))}
            placeholder="가격을 입력해주세요."
          />
        )}
      />

      <Controller
        control={control}
        name="discountPercentage"
        rules={{
          max: {
            value: 100,
            message: "100이내로 입력해야 합니다.",
          },
        }}
        render={({ field }) => (
          <FormInput
            label="상품할인율"
            type="text"
            maxLength={3}
            value={field?.value ?? ""}
            error={errors.discountPercentage}
            onChange={(e) => field.onChange(getNumricString(e.target.value))}
            placeholder="할인율을 입력해주세요."
          />
        )}
      />

      <Radio.Group
        label="브랜드"
        name={radioRegister.name}
        defaultValue="Weebur"
        style={{ gap: "10px", margin: "10px 0" }}
      >
        <Radio {...radioRegister} label="Apple" value="Apple" />
        <Radio {...radioRegister} label="Samsung" value="Samsung" />
        <Radio {...radioRegister} label="Weebur" value="Weebur" />
      </Radio.Group>

      {price && (
        <ProductPriceInfo
          price={price}
          discountPercentage={discountPercentage || 0}
          discountedPrice={+discountedPrice}
        />
      )}

      <Button fullWidth type="submit" disabled={!isValid}>
        제출
      </Button>
    </form>
  );
};

export default ProductNewPage;
