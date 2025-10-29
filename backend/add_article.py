#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Скрипт для быстрого добавления статей
Использование: python add_article.py
"""

import json
import os
from datetime import datetime

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'articles.json')

def load_articles():
    """Загрузить статьи из JSON"""
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save_articles(articles):
    """Сохранить статьи в JSON"""
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)

def add_article():
    """Интерактивное добавление статьи"""
    print("=== Добавление новой статьи ===\n")
    
    # Загружаем существующие статьи
    articles = load_articles()
    
    # Генерируем новый ID
    new_id = max([a['id'] for a in articles], default=0) + 1
    
    # Запрашиваем данные
    title = input("Название статьи: ")
    
    print("\nКатегория:")
    print("1. news - Новости")
    print("2. patch_notes - Патч ноты")
    print("3. announcements - Объявления")
    print("4. guides - Гайды")
    print("5. events - События")
    print("6. faq - FAQ")
    
    category_map = {
        '1': 'news',
        '2': 'patch_notes',
        '3': 'announcements',
        '4': 'guides',
        '5': 'events',
        '6': 'faq'
    }
    
    category_choice = input("Выберите категорию (1-6): ")
    category = category_map.get(category_choice, 'news')
    
    print("\nТекст статьи (для окончания ввода нажмите Enter дважды):")
    content_lines = []
    while True:
        line = input()
        if line == "" and (not content_lines or content_lines[-1] == ""):
            break
        content_lines.append(line)
    content = "\n".join(content_lines[:-1])  # Убираем последнюю пустую строку
    
    author = input("\nАвтор: ")
    
    tags_input = input("Теги (через запятую): ")
    tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()]
    
    # Создаем новую статью
    new_article = {
        "id": new_id,
        "title": title,
        "category": category,
        "content": content,
        "author": author,
        "created_at": datetime.now().isoformat(),
        "tags": tags
    }
    
    # Добавляем и сохраняем
    articles.append(new_article)
    save_articles(articles)
    
    print(f"\n✅ Статья успешно добавлена с ID: {new_id}")
    print(f"Просмотреть: http://localhost:8000/api/articles/detail/{new_id}")
    print(f"Все статьи: http://localhost:8000/api/articles/all")

if __name__ == "__main__":
    try:
        add_article()
    except KeyboardInterrupt:
        print("\n\nОтменено пользователем")
    except Exception as e:
        print(f"\n❌ Ошибка: {e}")

