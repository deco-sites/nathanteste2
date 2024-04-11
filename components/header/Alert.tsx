import Slider from "../../components/ui/Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import { useId } from "../../sdk/useId.ts";

export interface Props {
  alerts?: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="flex justify-start bg-[#025a44] text-gray-100 max-h-9 gap-4 p-96"
    >
      <img
        src="https://www.granado.com.br/static/version1710169308/frontend/Nectar/granado/pt_BR/images/logo-granado.svg"
        class="max-w-28 bg-[#004030] ml-11"
        alt=""
      />
      <img
        src="https://www.granado.com.br/static/version1710169308/frontend/Nectar/granado/pt_BR/images/logo-phebo.svg"
        class="max-w-[72px]"
        alt=""
      />
      <Slider class="carousel carousel-center bg-[#025a44]">
        {alerts.map((alert, index) => (
          <Slider.Item
            index={index}
            class="carousel-item flex justify-center items-center w-screen -ml-64"
          >
            <span class="font-poppins font-thin text-sm max-h-9 text-gray-200]">
              {alert}
            </span>
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
