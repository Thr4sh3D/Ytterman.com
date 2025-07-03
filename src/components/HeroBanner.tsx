import { OptimizedImage } from '@/components/OptimizedImage';

export const HeroBanner = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <OptimizedImage
          src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751541461385-profile_pic_color_square.png"
          alt="Tobias Ytterman - Certifierad Kontrollansvarig och BAS i Västernorrland"
          className="w-full h-auto"
          width={540}
          height={540}
          priority={true}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 via-transparent to-green-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-green-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
    </div>
  );
};