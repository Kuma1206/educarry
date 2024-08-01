import React, { useState, useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Draggable from "../components/Draggable";

const SortableList = ({ initialItems, onMoveUp }) => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    // 初期化時に位置情報を読み込む
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      console.log("Loaded items from localStorage:", savedItems);
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    // 位置情報を保存する
    console.log("Saving items to localStorage:", items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      if (active.id !== over.id) {
        const newItems = reorderItems(items, active.id, over.id);
        console.log("Reordered items:", newItems);
        setItems(newItems);
      }
    }
  };

  const reorderItems = (items, startId, endId) => {
    const newItems = [...items];
    const startIndex = newItems.findIndex((item) => item.id === startId);
    const endIndex = newItems.findIndex((item) => item.id === endId);

    if (startIndex !== -1 && endIndex !== -1) {
      const [removed] = newItems.splice(startIndex, 1);
      newItems.splice(endIndex, 0, removed);
    }

    return newItems;
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item) => (
          <Draggable
            key={item.id}
            id={item.id}
            label={item.label}
            date={item.date}
            onClick={() => onMoveUp(item.id)}
            onMoveUp={() => onMoveUp(item.id)}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;
