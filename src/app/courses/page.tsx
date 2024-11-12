"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

function page() {
  const images = [
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1476136236990-838240be4859?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        <Modal>
          {courseData.courses.map((course) => (
            <CardContainer className="inter-var m-4">
              <React.Fragment key={course.id}>
              <ModalTrigger>
                <CardBody
                  key={course.id}
                  className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
                >
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  
                </CardBody>
                </ModalTrigger>
              </React.Fragment>
            </CardContainer>
          ))}

          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Book your course 
                {" "}
                now! 
              </h4>
              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex  items-center justify-center">
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, expedita quisquam! Culpa voluptas maiores in non, recusandae minus officiis dignissimos sit deserunt quam blanditiis hic molestiae, expedita debitis! Ab, nostrum.
                  </span>
                </div>
                
                <div className="flex  items-center justify-center">
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, expedita quisquam! Culpa voluptas maiores in non, recusandae minus officiis dignissimos sit deserunt quam blanditiis hic molestiae, expedita debitis! Ab, nostrum.
                  </span>
                </div>
                <div className="flex  items-center justify-center">
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, expedita quisquam! Culpa voluptas maiores in non, recusandae minus officiis dignissimos sit deserunt quam blanditiis hic molestiae, expedita debitis! Ab, nostrum.
                  </span>
                </div>
                <div className="flex  items-center justify-center">
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, expedita quisquam! Culpa voluptas maiores in non, recusandae minus officiis dignissimos sit deserunt quam blanditiis hic molestiae, expedita debitis! Ab, nostrum.
                  </span>
                </div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      u
    </div>
  );
}

export default page;
