package com.example.Task.Tracker.repository;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HabitosRepository extends JpaRepository<Habitos, Long> {

    @Query("SELECT h FROM Habitos h WHERE h.usuario_id = :id_usuario")
    List<Habitos> findByUsuarioId(@Param("id_usuario") Integer id_usuario);
}
