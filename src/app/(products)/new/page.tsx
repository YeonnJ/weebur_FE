"use client";

import { useForm } from "react-hook-form";
import { ProductRequestBody } from "@/app/(products)/_types";
import FormInput from "@/components/formInput/FormInput";
import { useCreateProductMutation } from "../_queries";
import * as styles from "./page.css";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import Radio from "@/components/radio/Radio";

const ProductNewPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ProductRequestBody>({
    mode: "onChange",
  });
  const createProductMutation = useCreateProductMutation();
  const router = useRouter();

  const onSubmit = (data: ProductRequestBody) => {
    createProductMutation.mutate(data, {
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
    return Number(price).toLocaleString();
  };

  const discountedPrice = getDiscountedPrice();
  const radioRegister = register("brand");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <FormInput
        required={true}
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
        required={false}
        label="상품설명"
        register={register("description")}
        placeholder="상품설명을 입력해주세요."
      />

      <FormInput
        required={true}
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
        required={false}
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
        <div className={styles.resultPrice}>
          <p className={styles.price}>{Number(price).toLocaleString()}원</p>

          <div className={styles.priceContainer}>
            <p className={styles.discount}>
              {discountPercentage?.toLocaleString() || 0}%
            </p>
            <p className={styles.totalPrice}>
              {discountedPrice !== null &&
                `${discountedPrice.toLocaleString()}원`}
            </p>
          </div>
        </div>
      )}

      <Button fullWidth type="submit" disabled={!isValid}>
        제출
      </Button>
    </form>
  );
};

export default ProductNewPage;
