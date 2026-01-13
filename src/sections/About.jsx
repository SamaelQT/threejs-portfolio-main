import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Xin chào, tôi là Hữu Quang.</p>
              <p className="grid-subtext">
                Với hơn 2 năm kinh nghiệm học tập và thực hành CNTT, tôi đã xây dựng nền tảng vững chắc về hệ thống, hỗ
                trợ người dùng và vận hành ứng dụng, đồng thời hiểu rõ cách hoạt động của các website và hệ thống phía
                máy chủ.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext"> Nền tảng kỹ thuật & hỗ trợ hệ thống</p>
              <p className="grid-subtext">
                Tôi có nền tảng về hệ thống, phần mềm và ứng dụng web, giúp tôi hiểu rõ cách vận hành của các hệ thống
                CNTT và hỗ trợ người dùng xử lý sự cố một cách hiệu quả.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Linh hoạt trong giao tiếp & môi trường làm việc</p>
              <p className="grid-subtext">
                Tôi sẵn sàng làm việc theo ca, hỗ trợ từ xa hoặc trực tiếp, thích nghi nhanh với môi trường và
                quy trình làm việc của doanh nghiệp.
              </p>
              <Button name="Liên hệ với tôi" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Đam mê công nghệ & giải quyết vấn đề</p>
              <p className="grid-subtext">
                Tôi yêu thích việc tìm hiểu cách hệ thống hoạt động, phát hiện nguyên nhân lỗi và hỗ trợ người dùng khắc
                phục vấn đề. CNTT không chỉ là ngành học mà còn là lĩnh vực tôi muốn gắn bó và phát triển lâu dài.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Liên lạc</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  hoquang1992002@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
