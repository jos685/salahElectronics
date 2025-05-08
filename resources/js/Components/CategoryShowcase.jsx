import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '@fortawesome/fontawesome-free/css/all.min.css';


const CategoryShowcase = () => {
    const [categories, setCategories] = React.useState([
        { id: 'mobile-accessories', name: 'Phone & Tablets', imageUrl: 'assets/images/bg.jpg', link: '/Mobile'},
        { id: 'cables', name: 'Cables', imageUrl: 'assets/images/cables.jpeg', link: '/Cables'},
        { id: 'phones-tablets', name: 'Mobile Accesories', imageUrl: 'assets/images/headers.jpeg', link: '/Phones'},
        { id: 'tv-audio', name: 'TV & Audio', imageUrl: 'assets/images/image.jpeg', link: '/TvAudio'},
        
        
       
    ]);

    const onDragEnd = (result) => {   //calleed when the drag ends
        // Check if the item was dropped outside a droppable area
        if (!result.destination){
         return;
        }

        const items = Array.from(categories);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCategories(items);
    };

    return(
        <div className="bg-white py-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="categoriesRow" direction="horizontal">
            {(provided) => (
              <div
                className="flex space-x-4 overflow-x-auto scroll-smooth px-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {categories.map((category, index) => (
                  <Draggable key={category.id} draggableId={category.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="relative w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md cursor-grab overflow-hidden"
                      >                     
                      
                         <img
                          src={category.imageUrl}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform transform hover:scale-105"
                          onClick={() => window.location.href = category.link} // Simple navigation
                          style={{ cursor: 'pointer' }}
                         />

                         
                        <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-60 text-white text-center py-2 text-xs md:text-sm">
                          {category.name}

                         
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

    );
};

export default CategoryShowcase;