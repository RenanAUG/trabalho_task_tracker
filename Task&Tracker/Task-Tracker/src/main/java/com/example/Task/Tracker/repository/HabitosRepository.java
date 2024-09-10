package com.example.Task.Tracker.repository;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitosRepository extends JpaRepository<Habitos, Long> {

    List<Habitos> findByUsuarioId(Long usuarioId);
}
