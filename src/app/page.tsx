"use client";

import { useState, useRef, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Typography,
  Card,
  CardMedia,
  TextField,
  Box,
  Button,
} from "@mui/material";

const catagory = [
  {
    name: "Main course",
    foods: [
      {
        name: "Steak",
        img: "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        price: "$25",
        description: "Grilled steak with vegetables and sauce.",
      },
      {
        name: "Pasta",
        img: "https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg",
        price: "$15",
        description: "Creamy Alfredo pasta with chicken.",
      },
    ],
  },
  {
    name: "Appetizers",
    foods: [
      {
        name: "Spring Rolls",
        img: "https://zenaskitchen.com/wp-content/uploads/2022/02/Pork-Vegetable-Spring-Rolls.jpg",
        price: "$8",
        description: "Crispy spring rolls with sweet chili sauce.",
      },
      {
        name: "Garlic Bread",
        img: "https://www.allrecipes.com/thmb/JPYAOXw7_0SBDpxAEaHxAGpxbe0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/21080-great-garlic-bread-DDMFS-4x3-e1c7b5c79fde4d629a9b7bce6c0702ed.jpg",
        price: "$6",
        description: "Toasted garlic bread with herbs.",
      },
    ],
  },
  {
    name: "Beverages",
    foods: [
      {
        name: "Lemonade",
        img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fbcbceed90d40c95acd29cf8295f6fda017ba9887",
        price: "$4",
        description: "Freshly squeezed lemonade.",
      },
      {
        name: "Coffee",
        img: "https://thumbs.dreamstime.com/b/cup-cofee-20825194.jpg",
        price: "$3",
        description: "Hot brewed coffee.",
      },
      {
        name: "Tea",
        img: "https://www.aicr.org/wp-content/uploads/2020/06/peppermint-tea-on-teacup-1417945.jpg",
        price: "$2",
        description: "Refreshing green tea.",
      },
    ],
  },
  {
    name: "Desserts",
    foods: [
      {
        name: "Ice Cream",
        img: "https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg",
        price: "$5",
        description: "Vanilla ice cream with chocolate syrup.",
      },
      {
        name: "Cake",
        img: "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
        price: "$7",
        description: "Moist chocolate cake with frosting.",
      },
    ],
  },
];

export default function Home() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCategory = (index: number) => {
    const target = categoryRefs.current[index];
    if (target) {
      const offset = 100; // Adjust for header height
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveCategory(catagory[index].name); // Update active category
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  const handleScroll = () => {
    // Determine which category is in view
    categoryRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveCategory(catagory[index].name);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <main className="mt-20">
        <div style={{ height: "90px" }} className="w-full">
          <div className="flex flex-col gap-3" style={{ padding: "12px" }}>
            <div
              className=""
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 10,
                background: "white",
                padding: "12px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex gap-2 mb-2">
                <HomeIcon
                  sx={{ fontSize: "30px" }}
                  className="text-[#F5533D]"
                />
                <Typography sx={{ padding: "5px", fontWeight: "600" }}>
                  NPNHomeMade - Ladkrabang 51
                </Typography>
              </div>
              <div className="flex gap-3 items-center">
                <SearchIcon onClick={toggleSearchBar} className="ml-1" />
                <ListIcon className="ml-1"/>
                <div
                  className="flex overflow-x-auto"
                  style={{
                    whiteSpace: "nowrap",
                    padding: "0",
                  }}
                >
                  {catagory.map((category, index) => (
                    <div
                      key={index}
                      className="px-3"
                      style={{
                        display: "inline-block",
                        textAlign: "center",
                        cursor: "pointer",
                        borderBottom:
                          activeCategory === category.name
                            ? "2px solid #F5533D"
                            : "none",
                        color:
                          activeCategory === category.name ? "#F5533D" : "#000",
                      }}
                      onClick={() => scrollToCategory(index)}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
              {showSearchBar && (
              <TextField
                placeholder="ค้นหาเมนูเลย..."
                variant="outlined"
                fullWidth
                size="small"
                style={{ marginBottom: "2px", marginTop: "8px" }}
              />
            )}
            </div>

            {catagory.map((category, index) => (
              <div
                key={index}
                ref={(el) => {
                  categoryRefs.current[index] = el;
                }}
                className="mt-3"
              >
                <Typography variant="h6" className="font-semibold">
                  {category.name}
                </Typography>
                <div
                  className="grid gap-4 mt-4"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                    gap: "16px", // Space between items
                  }}
                >
                  {category.foods.map((food, foodIndex) => (
                    <Card
                      key={foodIndex}
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "none", // Removed shadow for a flat look
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={food.img}
                        alt={food.name}
                        style={{
                          width: "175px",
                          height: "175px",
                          objectFit: "cover",
                          borderRadius: "5%",
                        }}
                      />
                      <div
                        style={{
                          paddingTop: "8px",
                          paddingLeft: "2px",
                          textAlign: "start",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ fontWeight: "medium", marginBottom: "4px" }}
                        >
                          {food.name}
                        </Typography>
                        <Typography
                          style={{ color: "#555", fontWeight: "bold" }}
                        >
                          {food.price}
                        </Typography>
                        {food.description && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ marginTop: "4px" }}
                          >
                            {food.description}
                          </Typography>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            <Box className="mt-20"></Box>
          </div>
          <div
            className="w-full h-20 fixed bottom-0"
            style={{
              position: "fixed",
              bottom: 0,
            }}
          >
            <Box
              className="border flex justify-center items-center bg-[white]"
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ width: "90%", height: "60%" }}
                className="bg-[#F5533D] justify-center border rounded-xl transform transition-transform duration-150 active:scale-95 hover:shadow-lg cursor-pointer"
              >
                <div className="p-2 px-6 flex justify-between items-center">
                  <Typography className="text-white">
                    <ShoppingCartIcon className="mr-1 text-white" />
                    Chart
                  </Typography>
                  <Typography className="text-white">10 items</Typography>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}
