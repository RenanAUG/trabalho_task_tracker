package com.example.Task.Tracker.repository;

import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.model.Usuario;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefasRepository extends JpaRepository<Tarefas, Long> {


    @Query("SELECT t FROM Tarefas t WHERE t.usuario_id = :id_usuario")
    List<Tarefas> findByUsuarioId(@Param("id_usuario") Integer id_usuario);

    @Modifying
    @Transactional
    @Query("UPDATE Tarefas t SET t.concluida = TRUE WHERE t.id = :id")
    void concluiTarefa(@Param("id") Long id);
}
