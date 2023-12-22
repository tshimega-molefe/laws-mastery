import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  // Finding the unique course from the planetscale database, where the id of that course is equal to the courseId passed into this function by the params.courseId. We then compare this params.courseID, against all the id's found in the id column of the database table, upon finding an exact match, we select it, we then **include** it's chapters, specifically where those chapters are published ("isPublished = true"), and order them in ascending order.
  console.log("DEBUG: Attempting to fetch courseId from planetscale database");

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  // If there is no course, with that courseId, then redirect back to the root "/" in production, but for testing we return the following dummy page, which is a div element with the following tailwindCSS classes, and lorem ipsum text of 500 word count.
  if (!course) {
    console.log(
      "DEBUG: FAILED... Could not find a course, with the courseId in the parameters."
    );

    return (
      <div className="flex items-center justify-center h-full w-full">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        officiis nihil deserunt ut porro vel itaque, ullam impedit cumque,
        expedita dolore vero odit consequuntur neque quas excepturi eligendi
        tempore mollitia ipsam optio sit sapiente, debitis accusamus ea. Velit,
        officiis culpa itaque libero debitis suscipit. Repellat voluptates
        nostrum, et minima at, fugiat, est eligendi aspernatur veniam in itaque
        impedit quod! Saepe dolores minus dolorem quo? Suscipit perspiciatis
        tenetur vero aperiam delectus ut excepturi, ad quasi odio magnam itaque
        tempore voluptatum veritatis quod nam dolores unde similique minima,
        harum totam est earum id doloremque. Fuga sed fugit adipisci nam
        accusamus aliquam ex odio sint cupiditate sapiente cum rerum maiores
        error labore eius expedita et, doloremque dolor! Dolores, qui quis
        doloremque at nostrum laborum quas cumque officia, quasi quaerat quae,
        voluptatem voluptate adipisci dolorem delectus dignissimos animi a rem
        eius amet. Odit, et aut? Voluptate quaerat sequi neque qui, aliquid
        ipsum eos possimus, voluptas ea incidunt iste eveniet id. Fugit,
        molestiae consectetur reprehenderit porro, sint recusandae saepe
        officiis tenetur minima nobis assumenda perferendis impedit, fugiat nisi
        suscipit accusamus illo. Ad saepe dolorem magni velit maxime.
        Reprehenderit, rem sed. Nisi, reiciendis voluptates? Ullam incidunt
        temporibus doloremque iste aut labore ducimus tempore eveniet eligendi
        dignissimos at, fuga id, itaque esse. Eos, placeat provident aperiam
        quis neque repellendus earum animi perspiciatis eaque nesciunt delectus
        harum odio corporis blanditiis ex aut quaerat quod libero eveniet rem
        nam hic ipsum laboriosam. Ipsam voluptatum error voluptas omnis neque
        magnam illum porro quidem ullam? Quod laudantium ratione pariatur
        cupiditate ea quidem perspiciatis illum unde velit culpa. Omnis
        repellat, aut labore distinctio nihil error laborum autem animi eveniet
        commodi debitis modi, obcaecati perferendis! Animi cumque labore fugiat
        quo commodi in excepturi sunt provident fugit? Autem rerum magni nisi
        voluptate, aliquam explicabo numquam id maiores dolorum temporibus
        perspiciatis inventore optio beatae velit.
      </div>
    );
  }

  // ELSE: if we are able to find the id equal to the params' stored id, passed into this function, we will then redirect forward to the app/courses/[the course ID itself]/the chapters route/(then the id found at the course.chapters[0]), which is an array of chapters, we then [select] the first chapter at position [0] within that array of chapters, and fetch the id of that chapter i.e. ".id". This will return to the client, a page.tsx file visually representing to the user, the first chapter of the course in particular. This was determined by a button input (click or touch) by the user, using their finger or mouse pointer, which itself was a unique invention to translate (to be explained later) human-hand movement onto some kind of modern display, by using infrared sensors, powered by chemical reactions within aaa or aa batteries, to fire a series of electrical signals into the silicone molecules of the mouse's on-board processor chip. The chip sends the binary data to the computer, this binary data is a direct result of the analogue "mechanical might be a better word" machinery contained within the computer mouse. When you open up the mouse, inside of it you will find two wheels. Each wheel is usually made of black plastic with rectangular slots punched in it. Shining through each slot, are two light emitting diodes. Each LED shines onto a light sensitive transister. Electrical Engineers soldered the two emitters onto the on-board processor chip, spaced out far enough so when one transister is influenced by the light, it's photons, namely the influx of energy generated from within the elementary particle we've called a "photon", observing it at this scale, we assume the Conservation of Energy Principle holds true, and so by being a quantum ("a fundemental unit", a boson) [Delving into quarks and gluons would greatly increase the body of text, and theoretical physics is not something I want to do on a Thursday evening in sunny Cape Town in Dececenber] of electromagnetic radiation, this electromagnatic radiation is in fact energy, carried by the photon. It was produced by an atom undergoing a transition from a higher energy state to a lower energy state. These atoms were excited into this state by the aaa or aa battery within the mouse, if it was bluetooth. During this transition, the excess energy emitted in the form of the photon itself. Energy equals energy. It can never be destroyed, It always was, and it always will be. The Universe is infinite. Remember the Conservation of Energy Principle. The energy of this photon is equal to the energy difference between the intial and final states of the electron. [Energy equals Energy]. There are other ways in which photons can be emitted, such as Annihilation, Decay, Synchrotron Radiation, Spontaneous Emission. For succinctness, I will not be explaining in detail each. The photon spin, which is an intrinsic property that characterises the angular momentum of the photon, which is not related to the particle physically spinning on its axis, as might be imagined classically. The spin is actually quantized, meaning it can only take discrete values. It has a spin quantum number of 1. We visually represent this spin as a wave, the oscillation of which, as it moves through the fabric of space time, the distace it moves over time, and at a frequency, this frequency dependant on the amount of energy contained within the photon, light from stars shine brighter and travel further than the light generated by aa or aaa batteries due to the amount of energy (e^* > e^battery) released by each respectively, and a wavelenth, the amount of distance between two consectutive points in a wave that are in phase, moving at the speed of light, a constant "c", the wavelength falls into the infrared spectrum of light, and it influences the light sensitive transister on the other side of the the slot, and this essentially how the transister can "see" the its LED through the center of the slot. The other LED's infrared light is obstructed, and hence reflected back at an angle of incidence of 90 degrees, by the space between the slots of the two wheels. Therefore "switching on or off", a visual perception of any observer, whether mechaninal or biological, The output voltage from the transister is processed to switch rapidly from high to low as the LED's light is transmitted or occluded so that the voltage is low when the transistor is lit and high when it is darkness. Electrical Engineers implemented the use of two wheels rotating clockwise and anticlockwise respectively. The mouse's on-board processor chip measures the distance to determine direction, which we obtain by using the number transitions of on & off, over a certain period of time, to measure this distance. One wheel rotates for vertical movement, and the other rotates for horizontal movements. This can be visualised as a path over a digital canvas. The pattern of which is displayed on a device connected to a mouse, informed by the binary data I've aforementioned, meant illustrate to the user where their hand would be, in the scope of the three-dimensional space perceived by their eyes connected through the visual cortex to their brain. The user can now percieve the the data from the course, sent through the pixels of the display in front of them, the very light of which is from the energy from the mouse's wheels rotating, transferred from energy by movement of the user's hand, (generated by the energy from the infinately complex chemical reactions within our cells, and life which flows through our veins, Energy equals energy, It can never be destroyed, it always was, and it always will be, The Universe is Infinite), to the mouse pointer on the screen, the user can now click the button input, or if they did not have a mouse, and had a touch screen, see iPhone 15 Pro Max Plus, and used their finger instead to touch the button input, (similar process, but haptic feedback TL;DR), they would touch the button input, and only them would redirect. And this is the template string we return to the params.courseId object which will be stored in the constant, 'const CourseIdPage', which asyncronously runs the function to everything I've just described, all happening at the same time, at the very same instant across the infinately large and infinately small scales of the universe, and making available to the HTTPS request at this specifc URL, to the page.tsx file.
  console.log(
    "DEBUG: SUCCEEDED... Redirecting to the course belonging to the courseId in the paramaters."
  );
  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);
};

export default CourseIdPage;
