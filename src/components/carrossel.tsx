import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    { id: 1, name: "Ana Souza", text: "Essa experiência foi incrível! Nunca vi algo tão bem feito e funcional." },
    { id: 2, name: "Carlos Ferreira", text: "Muito intuitivo e fácil de usar. Me ajudou demais!" },
    { id: 3, name: "Juliana Lima", text: "Recomendo a todos! Atendimento ótimo e qualidade excepcional." },
];

export default function Carrossel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-100 max-w-lg mx-auto p-6">
            <div className="w-200">
                <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center"
                >
                    <p className="text-lg italic">"{testimonials[currentIndex].text}"</p>
                    <h5 className="mt-4 font-semibold">— {testimonials[currentIndex].name}</h5>
                </motion.div>
            </div>
            <div className="relative w-full">
            {/* Botões de navegação */}
            <button onClick={prevTestimonial} className="absolute left-0 top-1 -translate-y-1 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1 -translate-y-1 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                <ChevronRight size={20} />
            </button>
            </div>
        </div>
    );
}
